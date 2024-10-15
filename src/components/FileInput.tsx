export interface FileInputProps {
	accept?: string;
	onChange: (files: FileList | null) => void;
	[key: string]: any;
}

export const FileInput = ({accept, onChange, ...props }: FileInputProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        onChange(files);
    };

	return (
		<div>
			<input type="file" onChange={handleChange} {...props} accept={accept}/>
		</div>
	)
}
