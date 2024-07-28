<template>
  <div id="contact" class="mt-[30%] w-full px-16 mb-20 relative flex flex-col justify-center">
    <div
      class="flex border-b border-b-zinc-900 py-4"
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="600"
    >
      <span class="text-5xl font-Lora interactive">Fale comigo!</span>
    </div>

    <div class="flex justify-between mt-16 w-full">
      <div class="flex w-1/3 flex-col gap-5 mt-3">
        <div
          @click="contact.link ? openContact(contact.link) : ''"
          class="cursor-pointer flex items-center border-2 border-gray-primary bg-white w-full justify-between py-3 px-4 interactive hover:shadow-lg transition-shadow"
          v-for="contact in contacts"
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible="{ opacity: 1, x: 0 }"
          :hovered="{ x: 10 }"
          :duration="250"
        >
          <div class="flex gap-3 items-center">
            <Icon :name="contact.icon" size="26" />

            <div class="flex font-Raleway font-bold text-normal self-end">{{ contact.title }}</div>
          </div>

          <div>
            <Icon name="tabler:external-link" size="26" />
          </div>
        </div>
      </div>

      <div class="w-2/4">
        <form @submit.prevent="validateForm">
          <div class="flex flex-col gap-5 font-bold font-Sans">
            <div class="flex flex-col items-start text-base">
              <label for="name">Nome <span class="text-red-600">*</span></label>
              <input
                v-model="name"
                placeholder="Seu nome"
                type="text"
                id="name"
                :class="{ 'border-red-600': errors.name }"
                class="font-medium w-full border-2 border-gray-primary rounded-md py-3 px-2"
              />
            </div>

            <div class="flex flex-col items-start text-base">
              <label for="name">Email <span class="text-red-600">*</span></label>
              <input
                v-model="email"
                placeholder="Seu email"
                type="email"
                id="email"
                :class="{ 'border-red-600': errors.email }"
                class="font-medium w-full border-2 border-gray-primary rounded-md py-3 px-2"
              />
            </div>

            <div class="flex flex-col items-start text-base">
              <label for="name">Telefone</label>
              <input
                v-model="phone"
                v-mask="['(##) #####-####']"
                placeholder="Seu telefone"
                type="text"
                id="phone"
                :class="{ 'border-red-600': errors.phone }"
                class="font-medium w-full border-2 border-gray-primary rounded-md py-3 px-2"
              />
            </div>

            <div class="flex flex-col items-start text-base">
              <label for="message">Mensagem <span class="text-red-600">*</span></label>
              <textarea
                v-model="message"
                placeholder="Escreva aqui sua mensagem"
                name="message"
                id="message"
                :class="{ 'border-red-600': errors.message }"
                class="font-medium w-full border-2 border-gray-primary rounded-md py-3 px-2 h-32"
              ></textarea>
            </div>
          </div>

          <div class="flex items-center justify-center mt-5">
            <button
              type="submit"
              class="w-1/2 text-white py-3 px-4 rounded-md font-semibold bg-gray-primary tracking-wide hover:shadow-xl transition-shadow"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

interface Contact {
  icon: string;
  link: string;
  title: string;
}

const contacts = ref<Contact[]>([
  {
    icon: "mdi:instagram",
    link: "https://instagram.com/ffzrafaa_",
    title: "Instagram",
  },
  {
    icon: "ph:github-logo-bold",
    link: "https://github.com/rafaelffz",
    title: "GitHub",
  },
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/rafaelffz/",
    title: "LinkedIn",
  },
]);

function openContact(link: string) {
  window.open(link, "_blank");
}

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const errors = ref({
  name: false,
  email: false,
  phone: false,
  message: false,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome é obrigatório"),
  email: z.string().trim().email("Email inválido").min(5, "Email é obrigatório"),
  phone: z
    .string()
    .optional()
    .refine((value) => value === "" || value!.replace(/\D/g, "").length >= 8, {
      message: "Telefone deve ter no mínimo 8 dígitos",
    }),
  message: z.string().min(5, "Mensagem é obrigatória"),
});

const validateForm = () => {
  try {
    contactSchema.parse({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    });

    errors.value = {
      name: false,
      email: false,
      phone: false,
      message: false,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = {
        name: false,
        email: false,
        phone: false,
        message: false,
      };

      error.errors.forEach((error) => {
        if (error.path[0] === "name") fieldErrors.name = true;
        if (error.path[0] === "email") fieldErrors.email = true;
        if (error.path[0] === "phone") fieldErrors.phone = true;
        if (error.path[0] === "message") fieldErrors.message = true;
      });

      errors.value = fieldErrors;
    }
  }
};
</script>

<style scoped></style>
