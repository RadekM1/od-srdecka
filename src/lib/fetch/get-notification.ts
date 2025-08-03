"use server";

import {
  FetchedNotification,
  fetchedNotificationsSchema,
} from "@/schema/notification";

export const getNotification = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/oznameni`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: FetchedNotification = await response.json();

    const parsedNotification = await fetchedNotificationsSchema.parse(data);

    return parsedNotification.map((notification) => ({
      titulek: notification.acf.titulek,
      obsah: notification.acf.obsah,
    }))[0];
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return null;
  }
};
