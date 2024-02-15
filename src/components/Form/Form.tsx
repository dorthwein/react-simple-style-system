import React, {useEffect} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
interface FormInterface {
  defaultValues: any;
  mode?: string;
  reValidateMode?: string;
  validateOnMount?: boolean;
}

export default function Form(props: any) {
  const form = useForm<FormInterface>({
    defaultValues: props.defaultValues,
    mode: props.mode,
    reValidateMode: props.reValidateMode,
  });

  const {trigger} = form;

  useEffect(() => {
    if (props.validateOnMount) {
      trigger();
    }
  }, [trigger, props.validateOnMount]);

  return <FormProvider {...form}>{props.children}</FormProvider>;
}
