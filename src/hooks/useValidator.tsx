export const useValidator = () => {
    const validateHyperLink = (value: string): boolean => {
        const regexExp =
            /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/gi
        return regexExp.test(value)
    }
    return { validateHyperLink }
}
