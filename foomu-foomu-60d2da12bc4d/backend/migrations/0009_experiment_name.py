# Generated by Django 4.2.2 on 2023-07-16 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_alter_formulametadata_unique_together_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='experiment',
            name='name',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]