import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://samid.uz/v1/" }),
  tagTypes: ["Products", "Expences"],
  endpoints: (builder) => ({}),
});
