import axios from "axios";

const redis = "http://ip172-18-0-88-clch2nogftqg00cp27cg-5000.direct.labs.play-with-docker.com/";


const net = "http://ip172-18-0-40-clch2nogftqg00cp27cg-8080.direct.labs.play-with-docker.com/"
export const postRiesgos = async (obj) => {
    try {
        await axios.post(`${redis}api/valor`, {
            obj,
            col1:"userId",
            col2:"movieId",
            col3:"rating"
        });

    } catch (error) {
        console.log(error);
    }
};

export const getListarCoseno = async () => {
    try {
        const response = await axios.get(`${net}data/listarcoseno`);
        return response.data; 
    } catch (error) {
        console.error("Error al obtener datos de listarcoseno:", error);
        throw error; 
    }
};



export const Ratings = async (xset) => {
    try {
        const response = await axios.get(`${net}data/listarcosenosregistrados`);
        xset(response.data)
        return response.data; 
    } catch (error) {
        console.error("Error al obtener datos de cosenosregistrados:", error);
        throw error; 
    }
};




/*export const postRiesgos = async () => {
    try {
        await axios.post(`${redis}`, {
            "obj": {
                "Angelica": {"Blues Traveler": 345, "Broken Bells": 2.0, "Norah Jones": 4.5, "Phoenix": 5.0, "Slightly Stoopid": 1.5, "The Strokes": 2.5, "Vampire Weekend": 2.0},
                "Bill": {"Blues Traveler": 2.0, "Broken Bells": 3.5, "Deadmau5": 4.0, "Phoenix": 2.0, "Slightly Stoopid": 3.5, "Vampire Weekend": 3.0},
                "Chan": {"Blues Traveler": 5.0, "Broken Bells": 1.0, "Deadmau5": 1.0, "Norah Jones": 3.0, "Phoenix": 5, "Slightly Stoopid": 1.0},
                "Dan": {"Blues Traveler": 3.0, "Broken Bells": 4.0, "Deadmau5": 4.5, "Phoenix": 3.0, "Slightly Stoopid": 4.5, "The Strokes": 4.0, "Vampire Weekend": 2.0},
                "Hailey": {"Broken Bells": 4.0, "Deadmau5": 1.0, "Norah Jones": 4.0, "The Strokes": 4.0, "Vampire Weekend": 1.0},
                "Jordyn": {"Broken Bells": 4.5, "Deadmau5": 4.0, "Norah Jones": 5.0, "Phoenix": 5.0, "Slightly Stoopid": 4.5, "The Strokes": 4.0, "Vampire Weekend": 4.0},
                "Sam": {"Blues Traveler": 5.0, "Broken Bells": 2.0, "Norah Jones": 3.0, "Phoenix": 5.0, "Slightly Stoopid": 4.0, "The Strokes": 5.0},
                "Veronica": {"Blues Traveler": 3.0, "Norah Jones": 5.0, "Phoenix": 4.0, "Slightly Stoopid": 2.5, "The Strokes": 3.0}
            }
        });

    } catch (error) {
        console.log(error);
    }
};*/
