import { Button, ButtonWithTooltip } from './primitives/toolbar'
import React from 'react'
import { tablePluginHooks } from '../table/realmPlugin'
import TableIcon from '../../icons/table.svg'

export const InsertTable: React.FC = () => {
  const insertTable = tablePluginHooks.usePublisher('insertTable')
  return (
    <ButtonWithTooltip title="Insert table" onClick={insertTable.bind(null, true)}>
      <TableIcon />
    </ButtonWithTooltip>
  )
}
