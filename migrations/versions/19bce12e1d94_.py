"""empty message

Revision ID: 19bce12e1d94
Revises: fbb1bf6ed66a
Create Date: 2021-04-23 00:06:48.604917

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19bce12e1d94'
down_revision = 'fbb1bf6ed66a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'appointment', ['id'])
    op.create_unique_constraint(None, 'specialist', ['id'])
    op.create_unique_constraint(None, 'speciality', ['id'])
    op.create_unique_constraint(None, 'working_hours', ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'working_hours', type_='unique')
    op.drop_constraint(None, 'speciality', type_='unique')
    op.drop_constraint(None, 'specialist', type_='unique')
    op.drop_constraint(None, 'appointment', type_='unique')
    # ### end Alembic commands ###
