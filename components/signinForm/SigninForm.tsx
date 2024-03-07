'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { signinFormSchema } from '@/schema/signinFormSchema';

import FormNormalInput from '../inputs/formNormalInput/FormNormallnput';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Form } from '../ui/form';

const SigninForm = () => {
  const signinForm = useForm({
    resolver: zodResolver(signinFormSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async () => {};

  return (
    <section className="translate-center w-[380px]">
      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>이메일과 비밀번호를 입력해 주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...signinForm}>
            <form
              onSubmit={signinForm.handleSubmit(onSubmit)}
              className=" space-y-3"
            >
              <FormNormalInput
                control={signinForm.control}
                name="email"
                label="이메일"
                placeholder="이메일을 입력해 주세요."
              />
              <FormNormalInput
                control={signinForm.control}
                name="password"
                label="비밀번호"
                placeholder="비밀번호을 입력해 주세요."
                type="password"
              />

              <Button type="submit">로그인 하기</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default SigninForm;