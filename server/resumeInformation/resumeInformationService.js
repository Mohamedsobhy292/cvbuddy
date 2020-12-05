module.exports.validateAccessToData = (userId, documentId) => {
    if (String(userId) != String(documentId)) {
        return 'not authorized'
    }
}

module.exports.validateUserCanCreateNewResume = (user) => {
    const resumesCount = user.resumes.length;

    if (resumesCount > 2) throw new Error('cannot create new resume')
    return true
}
