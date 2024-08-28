export function generateStaticParams() {
    let slugs = ["1", "2", "3", "4", "5", "6", "7"];
    return slugs.map((slug) => ({ id: slug }));
}

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
    console.log(`🚀🚀🚀🚀🚀-> in page.tsx on 7`, id);
    return <div className="card">{id}</div>;
}
