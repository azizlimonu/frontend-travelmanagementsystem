export const BaseUrl = (): any => {
  return (
    'http://localhost:7000/api/v1' || process.env.NEXT_PUBLIC_API_BASE_URL
  );
};
