export const checkPhotoUrl = (photoUrl) => {
    console.log("PhotoUrl: ", photoUrl);
    if(!photoUrl) {
        return "Photo URL cannot be empty";
    }
}