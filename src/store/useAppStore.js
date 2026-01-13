import { create } from "zustand";

const useAppStore=create(()=>({
    user:{
        name:"Ekansh",
    },
}))

export default useAppStore