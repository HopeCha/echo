"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";
import { screenAtom } from "../../atoms/widget-atoms";
import { useAtomValue } from "jotai";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    error: <div>Error</div>,
    loading: <div>Loading...</div>,
    selection: <div>Selection</div>,
    voice: <div>Voice</div>,
    auth: <WidgetAuthScreen />,
    inbox: <div>Inbox</div>,
    chat: <div>Chat</div>,
    contact: <div>Contact</div>,
  }
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};