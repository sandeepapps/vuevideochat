export const setUserChatName = (state, name) => {
  state.user.name = name
}

export const addPeer = (state, { video, peer }) => {
  state.clients.push({ video, peer })
}

export const removePeer = (state, peer) => {
  state.clients = state.clients.filter((p) => {
    return p.peer.id !== peer.id
  })
}
