import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col items-center justify-center gap-6">
      <h1 className="text-6xl text-red-700">Oups!</h1>
      <p className="text-xl font-medium">
        Impossible de trouver la ressource demandée
      </p>
      <Link href="/">{"Revenir à l'accueil"}</Link>
    </div>
  );
}
