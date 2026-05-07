export const checkName = (firstName) => {
    if (!firstName)
        return "First name cannot be empty";

    if (firstName.length < 3)
        return "First name must have at least 3 characters";

    return "";
}