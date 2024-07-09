"use client";
import { useEffect, useState } from "react";

export default function ChuckNorris({ token }: { token: string }) {
    console.log("token in ChuckNorris", token);
    const [fact, setFact] = useState('');

    useEffect(() => {
        getFact(token, setFact);
    }, [token]);

    return (
        <div>
            <p>{fact}</p>
        </div>
    );
}

const getFact = async (token: string, setFact: any) => {
    console.log("token in getFact", token);

    const response = await fetch('http://localhost:3333/fact', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
    }

    const data = await response.json();
    const fact = data.fact;
    console.log("fact", fact);

    setFact(fact);
}
