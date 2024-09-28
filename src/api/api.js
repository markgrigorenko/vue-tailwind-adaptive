export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('Ошибка при загрузке пользователей')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function fetchUserPhotos(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${userId}`
        )
        if (!response.ok) {
            throw new Error('Ошибка при загрузке фотографий')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}
