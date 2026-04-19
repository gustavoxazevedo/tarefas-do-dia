import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { CirclePlus, Sigma } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { List, Check, SquarePen, Trash, ListCheck } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 mx-auto flex items-center justify-center">

      <Card className="w-lg">

        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="outline" className="cursor-pointer"><CirclePlus />  Cadastrar</Button>
        </CardHeader>

        <CardContent>

          <Separator className="mb-2" />

          <div>
            <Badge variant="default"><List />Todos</Badge>
            <Badge variant="outline"><Check />Não finalizados</Badge>
            <Badge variant="outline"><Check />Concluídos</Badge>
          </div>

          <div className="mt-4 border-b">

            <div className="h-12 flex justify-between items-center border-t border-gray-300">
              <div className="w-2 h-full bg-green-300"></div>
              <p className="flex-1 px-2">Estudar React</p>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={14} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input placeholder="Editar tarefa"/>
                      <Button className="cursor-pointer">Salvar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash size={14} className="cursor-pointer" />
              </div>  
            </div>

          </div>


          


          <div className="flex justify-between py-3">
            <div className="flex gap-2 items-center">
              <ListCheck size={16} />
              <p>Tarefas concluídas (3/3)</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"outline"} className="flex gap-2 items-center">
                  <Trash size={14} />
                  Limpar tarefas concluídas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>

        <div className="h-2 w-full bg-gray-200 mt-4 rounded-md">
            <div className="h-full bg-green-500 rounded-md" style={{ width: '50%' }}></div>
        </div>

        <div className="flex justify-end items-center">
          <Sigma size={24} />
          <p>3 tarefas no total</p>
        </div>

        </CardContent>

      </Card>

    </main>
  );
};

export default Home;