'use client'
import { useState, useEffect } from "react"
import { getNotification } from "@/lib/fetch/get-notification"

export const Notification = () =>{
    const [loading, setLoading] = useState<boolean>(true)
    const [notification, setNotification] = useState<{
        titulek: string,
        obsah: string
    } | null>(null)

    const fetchNotification = async () =>{
        setLoading(true)
        const tempNotif = await getNotification()
        setNotification(tempNotif)
        setLoading(false)
    }

    useEffect(()=>{
        fetchNotification()
    }
    ,[])

    return (
          <div className="w-full p-5 font-oldStandard bg-[#061E4C] text-white h-64 rounded-2xl  ">
            <div className="flex justify-center flex-col w-full">
                {loading && (
                    <div role="status" className="animate-pulse">
                        <div className="h-8 bg-gray-200/50 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-4 bg-gray-200/50 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div className="h-4 bg-gray-200/50 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div className="h-4 bg-gray-200/50 rounded-full dark:bg-gray-700 max-w-[315px] mb-2.5"></div>
                        <div className="h-4 bg-gray-200/50 rounded-full dark:bg-gray-700 max-w-[285px] mb-2.5"></div>
                    </div>
                )}
              {!loading && notification && (<p className="text-2xl mb-4 text-start">{notification.titulek}</p>)}
              {!loading && notification && (
                <p className="text-base whitespace-pre-line lg:text-lg text-start">
                {notification.obsah}
              </p>
              ) }
            </div>
          </div>
    )
}