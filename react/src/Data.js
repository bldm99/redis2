import axios from "axios";

const redis = "http://ip172-18-0-70-cld5caogftqg00e6cq40-5000.direct.labs.play-with-docker.com/";


const net = "http://ip172-18-0-57-cld5caogftqg00e6cq40-8080.direct.labs.play-with-docker.com/"


//Registrando datos de csv en redis
export const postRiesgos = async (obj , numero) => {
    try {
        await axios.post(`${redis}api/valor`, {
            obj,
            col1: "userId",
            col2: "movieId",
            col3: "rating",
            numero
        });

    } catch (error) {
        console.log(error);
    }
};

//Obteniendo peliculas recomendadas a traves de .Net
export const getPeliculas = async (xset) => {
    try {
        const response = await axios.get(`${net}data/recomendacion`);
        xset(response.data)
        return response.data;
    } catch (error) {
        console.error("Error al obtener Peliculas recomendadas:", error);
        throw error;
    }
};


//Registrando datos de redis en postgress mediante .Net
export const getListarCoseno = async () => {
    try {
        const response = await axios.get(`${net}data/registervecino`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener datos de listarcoseno:", error);
        throw error;
    }
};


//Obtwminedo vecinos cercanos mediante .Net registrado en db
export const Ratings = async (xset) => {
    try {
        const response = await axios.get(`${net}data/listarvecinos`);
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
