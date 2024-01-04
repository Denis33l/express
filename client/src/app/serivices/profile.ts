import { UserProfile } from "@prisma/client";
import { api } from "./api";

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, string>({
      query: (userId) => ({
        url: `/profile/${userId}`,
        method: "GET",
      }),
    }),
    editProfile: builder.mutation<string, UserProfile>({
      query: (profile) => ({
        url: `/profile/edit/${profile.id}`,
        method: "PUT",
        body: profile,
      }),
    }),
    addProfile: builder.mutation<UserProfile, UserProfile>({
      query: (profile) => ({
        url: "/profile/add",
        method: "POST",
        body: profile,
      }),
    }),
  }),
});

export const {
  useAddProfileMutation,
  useEditProfileMutation,
  useGetProfileQuery
} = profileApi;

export const {
  endpoints: {
    editProfile,
    getProfile,
    addProfile
  },
} = profileApi;