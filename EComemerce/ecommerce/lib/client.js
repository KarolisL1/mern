import sanityClient from '@sanity/client';
import imageUrlBuildier from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'dntfffza',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn : true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuildier(client);

export const urlFor = (source) => builder.image(source);