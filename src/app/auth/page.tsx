"use client";

import { fetchAddUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/hooks/useAuth";
import { isEmptyAuthObject } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

export default function AuthPage() {
  const router = useRouter();
  const { auth, logIn } = useAuthStore();

  const [mode, setMode] = useState(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formTitle = mode === MODE.LOGIN ? "Se connecter" : "S'inscrire";
  const buttonTitle = mode === MODE.LOGIN ? "Se connecter" : "S'inscrire";

  useEffect(() => {
    if (!isEmptyAuthObject(auth)) router.push("/");
  }, [auth, router]);

  const mutationLogin = useMutation({
    mutationKey: ["logIn"],
    mutationFn: async () => logIn(username, password),
    onSuccess: (data) => {
      if (!data.token) {
        setError("Nom d'utilisateur ou mot de passe incorrects.");
      } else {
        localStorage.setItem("token", data.token);
        router.push("/");
      }
    },
  });

  const mutationRegister = useMutation({
    mutationKey: ["register"],
    mutationFn: () => fetchAddUser(username, email, password),
    onSuccess: (data) => {
      if (!data.username || !data.email || !data.password) {
        setError("Format de données incorrects.");
      } else {
        toast({
          title: "Enregistrement de l'utilisateur",
          description:
            "Vos données ont bien été enregistrées. Il s'agit d'une version de test, veuillez vous identifiez avec les données de test.",
        });
        router.push("/auth");
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (mode) {
      case MODE.LOGIN:
        mutationLogin.mutate();
        break;
      case MODE.REGISTER:
        mutationRegister.mutate();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        <div className="flex flex-col gap-2">
          <Label>{"Nom d'utilisateur"}</Label>
          <Input
            type="text"
            name="username"
            placeholder="emilys"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="emilys@dummyjson.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <Label>Mot de passe</Label>
          <Input
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="rounded-md bg-lama p-2 text-white disabled:cursor-not-allowed disabled:bg-pink-200"
          disabled={mutationLogin.isPending}
        >
          {buttonTitle}
        </Button>

        {error && <div className="text-xs text-red-600">{error}</div>}

        {mode === MODE.LOGIN && (
          <>
            <div
              className="cursor-pointer text-center text-sm underline"
              onClick={() => setMode(MODE.REGISTER)}
            >
              Pas de compte ?
            </div>
            <div className="text-sm">
              <h4>Vous pouvez utiliser ces identifiants de connexion :</h4>
              <p className="text-center">
                {"Nom d'utilisateur"} :{" "}
                <span className="font-semibold">emilys</span>
              </p>
              <p className="text-center">
                Mot de passe : <span className="font-semibold">emilyspass</span>
              </p>
            </div>
          </>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="cursor-pointer text-center text-sm underline"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Vous possedez un compte ?
          </div>
        )}
      </form>
    </div>
  );
}
