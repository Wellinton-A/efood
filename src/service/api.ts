import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../containers/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestarants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const apiReducer = api.reducer
export default api
export const { useGetRestarantsQuery } = api
