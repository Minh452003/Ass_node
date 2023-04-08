import { IBlog } from "../interfaces/blogs";
import instance from "./instance";
const { accessToken } = JSON.parse(localStorage.getItem('user')!) || [];
export const getAllBlog = () => {
    return instance.get("/blogs")
}
export const getBlog = (id: number | string) => {
    return instance.get("/blogs/" + id);
}
export const addBlog = (blog: IBlog) => {
    return instance.post("/blogs", blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    );
}
export const updateBlog = (blog: IBlog) => {
    return instance.patch("/blogs/" + blog.id, blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const removeBlog = (id: number | string) => {
    return instance.delete("/blogs/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}