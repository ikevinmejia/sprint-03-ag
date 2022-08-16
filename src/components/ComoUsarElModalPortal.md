1. Usar un estado para abrir el modal cuando este en TRUE al dar clic en el boton,
2. El componente modal recibe un componente que lo renderiza, en este caso es el <ProgressBar />

{
showModal && (
<Modal>
<ProgressBar />
</Modal>
)
}
<Button event={setShowModal} />
