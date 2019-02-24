import React from 'react'

export default ({ isOnline }) => {
  return (
    <>
      <img
        src={`https://icon.now.sh/signal_wifi_statusbar_null_26x24px/${
          isOnline ? '66D966' : 'D75562'
        }`}
        alt="wifi"
      />
    </>
  )
}
