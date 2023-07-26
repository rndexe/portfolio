import createClient from "$lib/prismicio";

export async function load({ fetch }) {
    const client = createClient({ fetch });

    const all_works = await client.getAllByType("works", {
        fetch: ["works.order", "works.title", "works.description", "works.cover_image"],
        orderings: {
            field: "my.works.order",
            direction: "desc",
        },
    });
    const works_data = all_works.map((work) => {
        const new_work = { ...work.data, uid: work.uid };
        return new_work;
    });
    //console.log(works_data);

    return { works_data };
}
