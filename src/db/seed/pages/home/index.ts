import { getFileByPath } from '@/utilities/getFileByPath'
import { BasePayload } from 'payload'
import { homePage } from './config'
import {
  caseEducationImagePath,
  caseSkillImagePath,
  caseWellnessImagePath,
  educationalSupportImagePath,
  enrichmentActivitiesImagePath,
  healthWellnessImagePath,
  heroImagePath,
  metaImagePath,
} from './media'
import { caseEducationImage } from './media/data/cases/education'
import { caseSkillImage } from './media/data/cases/skill'
import { caseWellnessImage } from './media/data/cases/wellness'
import { homeHeroImage } from './media/data/hero/main'
import { enrichmentActivitiesImage } from './media/data/highlights/activities'
import { educationalSupportImage } from './media/data/highlights/education'
import { healthWellnessImage } from './media/data/highlights/health'
import { homeMetaImage } from './media/data/meta/main'

export const seedHomePage = async (payload: BasePayload) => {
  try {
    const [
      homeHeroImageBuffer,
      metaImageBuffer,
      healthWellnessImageBuffer,
      enrichmentActivitiesImageBuffer,
      educationalSupportImageBuffer,
      caseEducationImageBuffer,
      caseWellnessImageBuffer,
      caseSkillImageBuffer,
    ] = await Promise.all([
      getFileByPath(heroImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(metaImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(healthWellnessImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(enrichmentActivitiesImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(educationalSupportImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(caseEducationImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(caseWellnessImagePath, (err) => {
        payload.logger.error(err)
      }),
      getFileByPath(caseSkillImagePath, (err) => {
        payload.logger.error(err)
      }),
    ])

    const [
      _homeHeroImage,
      metaImage,
      _healthWellness,
      _enrichmentActivities,
      _educationalSupport,
      caseEducation,
      caseWellness,
      caseSkill,
    ] = await Promise.all([
      payload.create({
        collection: 'media',
        data: homeHeroImage,
        file: homeHeroImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: homeMetaImage,
        file: metaImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: healthWellnessImage,
        file: healthWellnessImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: enrichmentActivitiesImage,
        file: enrichmentActivitiesImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: educationalSupportImage,
        file: educationalSupportImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: caseEducationImage,
        file: caseEducationImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: caseWellnessImage,
        file: caseWellnessImageBuffer,
      }),
      payload.create({
        collection: 'media',
        data: caseSkillImage,
        file: caseSkillImageBuffer,
      }),
    ])

    await payload.create({
      collection: 'pages',
      data: homePage({
        heroImage: _homeHeroImage,
        metaImage,
        highlight: {
          education: _educationalSupport,
          wellness: _healthWellness,
          activities: _enrichmentActivities,
        },
        cases: {
          education: caseEducation,
          wellness: caseWellness,
          skill: caseSkill,
        },
      }),
    })
  } catch (error) {
    payload.logger.error('Error seeding home page:', error)
    throw error
  }
}
