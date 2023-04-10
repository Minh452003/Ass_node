import { IService } from "../interfaces/services";
import instance from "./instance";
const { accessToken } = JSON.parse(localStorage.getItem('user')!) || [];
export const getAllSe = () => {
    return instance.get("/services")
}
export const getSe = (id: number | string) => {
    return instance.get("/services/" + id);
}
export const addSe = (blog: IService) => {
    return instance.post("/services", blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    );
}
export const updateSe = (blog: IService) => {
    return instance.patch("/services/" + blog.id, blog, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const removeSe = (id: number | string) => {
    return instance.delete("/services/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}