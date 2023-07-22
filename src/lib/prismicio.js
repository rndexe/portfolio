import * as prismic from "@prismicio/client";

const repoName = "rndexe"; // Fill in your repository name

// This defines how you will structure URL paths in your project.
// Update the types to match the custom types in your project, and edit
// the paths to match the folder-based routing in your project.

const createClient = ({ fetch } = {}) => {
    const clientOptions = {
        fetch,
    };
    const client = prismic.createClient(repoName, clientOptions);
    return client;
};

export default createClient;
