import * as httpRequest_cus from "../../utils/httpRequest";

export const listFilmNow = async () => {
    try {
        const res = await httpRequest_cus.get_cus("listTheatreShowTimesNow");
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAbout = async () => {
    try {
        const res = await httpRequest_cus.get_cus("about");
        console.log(res.data);
        return res.data[0];
    } catch (error) {
        console.log(error);
    }
};
