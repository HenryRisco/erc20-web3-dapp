import { useToken } from "wagmi";
import { ErrorInfo, Title } from "./ui";
import TokenInfoItem from "./TokenInfoItem";

function TokenInfoSkeleton() {
    return (
        <section className="p-4 bg-white border shadow rounded-lg w-[360px] sm:w-[469px]">
            <div className="h-6 bg-gray-300 rounded mb-4 w-[156px] animate-pulse" />
            <ul className="grid gap-4 animate-pulse">
                <li className="h-14 sm:h-9 bg-gray-300 rounded" />
                <li className="h-14 sm:h-9 bg-gray-300 rounded" />
                <li className="h-14 sm:h-9 bg-gray-300 rounded" />
                <li className="h-14 sm:h-9 bg-gray-300 rounded" />
                <li className="h-14 sm:h-9 bg-gray-300 rounded" />
            </ul>
        </section>
    );
}

export default function TokenInfo() {
    const { data, isLoading, isError } = useToken({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    watch: true,
    });

    if (isLoading) return <TokenInfoSkeleton />;

    return (
        <section className="p-4 bg-white border shadow w-fit rounded-lg text-sm">
            <Title>Token Information</Title>
            {isError ? (
            <ErrorInfo message="Error cargando la información del token. Prueba de nuevo más tarde." />
            ) : (
            <ul className="grid gap-4">
                <TokenInfoItem label="Name" value={data.name} />
                <TokenInfoItem label="Symbol" value={data.symbol} />
                <TokenInfoItem label="Address" value={data.address} />
                <TokenInfoItem label="Decimals" value={data.decimals} />
            </ul>
            )}
        </section>
    );
}
