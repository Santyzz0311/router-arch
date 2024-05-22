const baseUrl: string = 'https://rickandmortyapi.com/api/'
const charactersUrl: string = `${baseUrl}character`

export const getCharacterById = async ({ characterId }: { characterId: number }) => {
  try {
    const response = await fetch(`${charactersUrl}/${characterId}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error al ejecutar la peticion: ${error}`)
  } 
}

export const getAllCharacter = async () => {
  try {
    const response = await fetch(`${charactersUrl}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}