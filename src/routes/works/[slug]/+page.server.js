import createClient from "$lib/prismicio.js";

export async function load({ fetch, params }) {
    const { slug } = params;
    const client = await createClient({ fetch });

    const work = await client.getByUID("works", slug);
    if (work) {
        return { work : work.data };
    }
}
