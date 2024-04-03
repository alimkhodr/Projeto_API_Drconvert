"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Trash, Upload } from "@phosphor-icons/react";

interface UploadFormProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

export function UploadForm({ open, setOpen }: UploadFormProps) {
	return (
		<Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black0/90 inset-0 fixed overflow-y-auto grid place-items-center p-8">
					<Dialog.Content className="bg-black1 text-black2 min-w-[28.813rem] h-auto shadow-lg shadow-black0/25 rounded-xl">
						<Dialog.Title className="flex items-center gap-4 text-white font-medium px-8 py-8 border-b border-b-gray2/30">
							<Upload className="h-7 w-7 text-white" weight="fill" />
							<div className="flex flex-col gap-1">
								<p className="font-bold text-white text-base">Upload</p>
								<p className="font-normal text-gray1 text-xs">
									Selecione o arquivo que você quer enviar abaixo
								</p>
							</div>
						</Dialog.Title>

						<div className="border-dashed border-2 border-gray2 rounded-md flex flex-col gap-8 mx-8 mt-8 py-8 items-center justify-center">
							<Upload className="h-7 w-7 text-white" weight="fill" />
							<div className="flex flex-col gap-1 items-center">
								<p className="font-medium text-xs text-white">
									Arraste e solte seu arquivo ou{" "}
									<span className="text-pink">selecione manualmente</span>
								</p>
								<p className="font-medium text-xs text-gray1">
									Apenas formato de arquivo .csv
								</p>
							</div>
						</div>

						<div className="text-white text-xs font-semibold flex flex-col gap-3 px-8 py-8">
							<p className="text-white text-xs font-semibold">
								Arquivos selecionados <span className="text-gray1">(1)</span>
							</p>
							<div className="bg-gray2 rounded-md px-4 py-3 flex items-center justify-between">
								<div>
									<p className="font-semibold text-xs text-white/80">
										arquivo.csv
									</p>
									<p className="font-medium text-[10px] text-gray1">3.5mb</p>
								</div>
								<Trash className="h-4 w-4 text-gray1 hover:text-red duration-200 cursor-pointer" />
							</div>
						</div>

						<footer className="flex gap-4 w-full mt-4 px-8 pb-8">
							<Dialog.Close className="cursor-pointer py-3 px-8 bg-gray2 rounded-md flex items-center justify-center font-semibold text-white text-xs">
								Cancelar
							</Dialog.Close>
							<button
								type="submit"
								className="cursor-pointer py-3 w-fit flex-1 bg-pink rounded-md flex items-center justify-center font-semibold text-white text-xs">
								Enviar arquivo
							</button>
						</footer>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}