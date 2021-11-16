import { useState } from 'react';
import { useRouter } from 'next/router';

export default function PostCard({ partner }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish post
    const publishPartner = async (partnerID) => {
        // change publishing state
        setPublishing(true);

        try {
            // Update post
            await fetch('/api/partners', {
                method: 'PUT',
                body: partnerID,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };
    // Delete post
    const deletePartner = async (partnerID) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/partners', {
                method: 'DELETE',
                body: partnerID,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{partner.name}</h3>
                <p>{partner.content}</p>
                <small>{new Date(partner.createdAt).toLocaleDateString()}</small>
            </li>
        </>
    );
}