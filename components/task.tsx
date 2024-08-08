"use client"
import { useState } from 'react';
import EditDialog from './editDialog';
import RemoveDialog from './removeDialog';


export default function Task(props: { id: number, text: string, update_at: string }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const id = props.id
  const text = props.text
  const update_at = props.update_at
  let last_update = new Date(update_at)

  return (
    <>
      <div>
        <p className="text-gray-600 break-all">
          {text}
        </p>
        <p className="text-xs text-gray-400">最終更新日時：{last_update.toLocaleString("ja-JP")}</p>
      </div>

      <div className="flex">
        <button type="button" className="w-9 text-blue-500 hover:text-blue-600" onClick={() => setShowEditModal(true)}>編集</button>
        <button type="button" className="ml-2 w-9 text-red-500 hover:text-red-600" onClick={() => setShowRemoveModal(true)}>削除</button>
      </div>
      {showEditModal ? (
        <EditDialog id={id} showModal={setShowEditModal}></EditDialog>
      ) : null}
      {showRemoveModal ? (
        <RemoveDialog id={id} showModal={setShowRemoveModal}></RemoveDialog>
      ) : null}
    </>
  )
}