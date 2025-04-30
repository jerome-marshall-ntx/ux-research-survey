import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import type { Step1FormValues, Step2FormValues } from '@/lib/schema'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { STEP2_FORM_OPTIONS, step2Schema } from '@/lib/schema'

interface Step2FormProps {
  relationshipType: Exclude<Step1FormValues['relationship'], 'other'>
  onSubmit: (data: Step2FormValues) => void
  onBack: () => void
}

export function Step2Form({
  relationshipType,
  onSubmit,
  onBack,
}: Step2FormProps) {
  const [otherText, setOtherText] = useState('')

  const form = useForm<Step2FormValues>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      roleWorkAreas: [],
    },
  })

  // Handle form submission
  const handleSubmit = (data: Step2FormValues) => {
    // If "Other" is selected and there's text, replace "Other" with the specific text
    if (data.roleWorkAreas.includes('Other') && otherText.trim()) {
      data.roleWorkAreas = data.roleWorkAreas
        .filter((area) => area !== 'Other')
        .concat([`Other: ${otherText.trim()}`])
    }
    onSubmit(data)
  }

  const formOptions = STEP2_FORM_OPTIONS[relationshipType]
  const isOtherSelected = form.watch('roleWorkAreas').includes('Other')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="roleWorkAreas"
          render={() => (
            <FormItem>
              <FormLabel className="mb-3 flex leading-normal">
                {formOptions.title} <span className="text-red-500">*</span>
              </FormLabel>
              <div className="space-y-3">
                {formOptions.options.map((option) => (
                  <FormField
                    key={option}
                    control={form.control}
                    name={'roleWorkAreas'}
                    render={({ field: innerField }) => {
                      // Safely handle array value
                      const values = Array.isArray(innerField.value)
                        ? innerField.value
                        : []

                      return (
                        <FormItem
                          key={option}
                          className="flex flex-row items-center space-y-0 space-x-3"
                        >
                          <FormControl>
                            <Checkbox
                              checked={values.includes(option)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  innerField.onChange([...values, option])
                                } else {
                                  innerField.onChange(
                                    values.filter((v) => v !== option),
                                  )
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-sans! font-normal!">
                            {option}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {isOtherSelected && (
          <FormItem>
            <FormLabel>Please specify:</FormLabel>
            <FormControl>
              <Input
                placeholder="Please specify your option"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
              />
            </FormControl>
          </FormItem>
        )}

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
