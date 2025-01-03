import axios, { AxiosResponse } from 'axios';
interface fetchVideoRegisterProps {
  jsonData: {
    url: string;
    content: string;
    lat: number;
    lng: number;
    category: string;
    restaurant: string;
  };
  token: string;
}
export const fetchVideoRegister = async ({
  jsonData,
  token,
}: fetchVideoRegisterProps): Promise<AxiosResponse<any, any>> => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    };

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/videos`;
    return await axios.post(url, jsonData, { headers });
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      throw new Error(
        `fetchVideoRegister Error: ${e.response?.statusText || e.message}`
      );
    } else {
      throw new Error(`fetchVideoRegister Error: ${e.message}`);
    }
  }
};
