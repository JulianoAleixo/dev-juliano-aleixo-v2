import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { db } from "../lib/firebase";
import {
    doc,
    getDoc,
    updateDoc,
    arrayUnion,
    increment,
    setDoc,
} from "firebase/firestore";

const DOC_REF = () => doc(db, "likes", "portfolio");

function getDeviceId(): string {
    let id = localStorage.getItem("deviceId");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("deviceId", id);
    }
    return id;
}

export function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState<number | null>(null);
    const [pop, setPop] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            const deviceId = getDeviceId();
            const snap = await getDoc(DOC_REF());

            if (!snap.exists()) {
                await setDoc(DOC_REF(), { count: 0, devices: [] });
                setCount(0);
            } else {
                const data = snap.data();
                setCount(data.count);
                setLiked(data.devices?.includes(deviceId) ?? false);
            }

            setLoading(false);
        };

        init();
    }, []);

    const handleClick = async () => {
        if (liked || loading) return;

        const deviceId = getDeviceId();

        setLiked(true);
        setCount((prev) => (prev ?? 0) + 1);
        setPop(true);
        setTimeout(() => setPop(false), 280);

        await updateDoc(DOC_REF(), {
            count: increment(1),
            devices: arrayUnion(deviceId),
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={liked || loading}
            className={`
                inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full
                border border-violet-600 bg-transparent
                text-sm font-medium select-none
                transition-colors duration-150
                ${!liked && !loading ? "cursor-pointer hover:bg-violet-600/10 active:scale-95" : "cursor-default"}
                ${liked ? "bg-violet-600/10" : ""}
            `}
        >
            <Heart
                size={20}
                stroke="#7C3AED"
                fill={liked ? "#7C3AED" : "none"}
                className={pop ? "animate-pop" : ""}
            />
            {count === null ? "0 Likes" : `${count.toLocaleString()} Likes`}
        </button>
    );
}
