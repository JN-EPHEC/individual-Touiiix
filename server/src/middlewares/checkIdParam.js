export const checkIdParam = (req, res, next) => {
    const { id } = req.params;
    const checkId = parseInt(id, 10);
    if (isNaN(checkId) || checkId <= 0) {
        return res.status(400).json({ error: "ID invalide, un entier positif est attendu" });
    }
    req.params.id = checkId.toString();
    next();
};
//# sourceMappingURL=checkIdParam.js.map