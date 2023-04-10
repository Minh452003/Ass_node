import { IResume } from "../interfaces/resumes";
import instance from "./instance";
const { accessToken } = JSON.parse(localStorage.getItem('user')!) || [];
export const getAllRe = () => {
    return instance.get("/resumes")
}
export const getRe = (id: number | string) => {
    return instance.get("/resumes/" + id);
}
export const addRe = (blog: IResume) => {
    return instance.post("/resumes", blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    );
}
export const updateRe = (blog: IResume) => {
    return instance.patch("/resumes/" + blog.id, blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const removeRe = (id: number | string) => {
    return instance.delete("/resumes/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}