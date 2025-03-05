
"use client";
import React from "react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
export default function AddProblemMetadata() {
    const [inputs,setInputs] = useState({
        id: "",
        title: "",
        difficulty: "",
        category: "",
        videoId: "",
        link: "",
        order: 0,
        likes: 0,
        dislikes: 0
    })
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await setDoc(doc(firestore, "problems", inputs.id), {
            title: inputs.title,
            difficulty: inputs.difficulty,
            category: inputs.category,
            videoId: inputs.videoId,
            link: inputs.link,
            order: inputs.order,
            likes: inputs.likes,
            dislikes: inputs.dislikes
        })
        toast.success("Problem metadata added successfully")
        // TODO: implement form submission
    }
  return (
    <div>
      <h1>Add Problem Metadata</h1>
      <form className="p-6 flex flex-col max-w-sm gap-3"onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={inputs.id} onChange={handleInputChange} />
        <input type="text" name="title" placeholder="Title" value={inputs.title} onChange={handleInputChange} />
        <input type="text" name="difficulty" placeholder="Difficulty" value={inputs.difficulty} onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category" value={inputs.category} onChange={handleInputChange} />
        <input type="text" name="videoId" placeholder="Video ID" value={inputs.videoId} onChange={handleInputChange} />
        <input type="text" name="link" placeholder="Link" value={inputs.link} onChange={handleInputChange} />
        <input type="number" name="order" placeholder="Order" value={inputs.order} onChange={handleInputChange} />
        <input type="number" name="likes" placeholder="Likes" value={inputs.likes} onChange={handleInputChange} />
        <input type="number" name="dislikes" placeholder="Dislikes" value={inputs.dislikes} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}