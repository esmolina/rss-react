import { HttpClient } from '../HTTPClient/HTTPClient';

enum Path {
  characters = 'https://rickandmortyapi.com/api/character',
}

export class NetworkClientMethods {
  public getCharacters = async () => {
    try {
      const response = await HttpClient.get(`${Path.characters}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong about getting characters: ${error}`);
    }
  };

  public getSelectedCharacter = async (id: number) => {
    try {
      const response = await HttpClient.get(`${Path.characters}/${id}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong about getting selected character: ${error}`);
    }
  };

  public getFiltredForNameCharacters = async (name: string) => {
    try {
      const response = await HttpClient.get(`${Path.characters}/?name=${name}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong about getting filtred characters: ${error}`);
    }
  };
}

export const NetworkClient = new NetworkClientMethods();
