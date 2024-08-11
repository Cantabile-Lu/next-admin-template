import Layout from "@/components/Layout";
import { Modal } from "./modal";

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
    return (
        <Layout>
            <Modal>{photoId}</Modal>;
        </Layout>
    );
}
