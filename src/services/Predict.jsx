const ENPOINT = 'http://localhost:3030';

export async function predictImage(formData) {
   return fetch(`${ENPOINT}/predict`, {
        method: "POST",
        body: formData,
    });

}


export async function savePredict(formData) {
    return fetch(`${ENPOINT}/predict/save`, {
         method: "POST",
         body: formData,
     });
 }
export async function getPred() {
    return fetch(`${ENPOINT}/predict`);
}