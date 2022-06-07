const baseUrl = "https://forms-47.herokuapp.com/";
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlmM2Y2OGM4MjA2YTJlNGQyYTExMjUiLCJuYW1lIjoic2F1cmFiaCIsImVtYWlsIjoiYWthc2hAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkQXpsTnZydExHei9TWlVkU0s3SGNyZUluRlNKbi9laDVIOXg3SkVxL0JpcWtrdkR1aHd2QVciLCJyb2xlIjoiNjI5OWI0ZmZlM2QyMDA0YzBhNTQ1YzMyIiwiaWF0IjoxNjU0NjAzNjM1LCJleHAiOjE2NTQ2OTAwMzV9.NH35oXDlgpPbX6Rmr0PnbNeI3JRgVZq2C1rYZWjiv7c";

interface questionInterface {
    text: string;
    type: string;
    options?: string[];
}